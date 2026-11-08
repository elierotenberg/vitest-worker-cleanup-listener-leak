# Vitest worker cleanup listener leak

With `isolate: false` and more than one worker, a worker runs several tasks
one after another. Each task deserializes its own copy of the provided context.
After a forced garbage collection, the copies of every previous task are still
alive, so the heap of the worker grows by the size of the provided context for
each test file.

Run:

```sh
npm install
npm test
```

`global-setup.mjs` provides a value of about 50 MB. Each test file runs
`check.mjs`, which forces a garbage collection, counts the copies of the
previous tasks that are still alive, then records a `WeakRef` to the copy of
its own task.

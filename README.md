# Skutch

Sketch coding challenge app, created with CRA

## Building

Just run `npm install` followed by `npm run build/start` to build/start the app, and everything should _just work_.

## Design decisions

### Typescript

I don't see any reason to use JS when typescript is available. Typing some redux features is not trivial but in my
opinion the benefits outweigh any possible downside.

### Redux

I grew fond of Redux (or Flux in general) in Android so using it in web seems the more natural approach to control data
flow. Everything follows a very typical redux architecture except the usage of redux rtk
[redux rtk](https://redux-toolkit.js.org/rtk-query/overview).

I decided to used `rtk` to experiment with its API, and indeed it simplified and removed almost all boilerplate tied to
writing async actions that go to network (that are 99% of the use cases of async actions). You can check the
implementation details in `app/document/DocumentSlice.ts/api`.

### Code structure

The code is structured following a simple feature folder pattern. This would allow making js bundles easier later.

```
├───app 
│   ├───components   # Agnostic components, with further classification if needed
│   └───document     # Document viewer feature
│       ├───model    # Pure ts files / contracts
│       ├───view     # React views
│       ├───assets   # Assets for this feature, if they existed
│       └───slice.ts # The slice that will go into the store
└───assets           # Shared assets for the whole app
```

### Styling

I decided to go with the recommendation and use `styled components`. I had no previous experience with this library but
for this simple use case seems to work very well. I just organized the styles in a way that made sense for the scale of
this project. Best practices might be lacking.

Additionally, I tried to be faithful to the designs provided, but I didn't want to spend too much time making it "
perfect" to save some time. Some UI details like placeholder / error states for images were left out.

### Router

I wanted to experiment a bit with `react router v6` and added very basic routing functionality:

* `/` Fetches the default artboard
* `/40432a93-5434-4059-87b9-545fd1ad6ee0` Fetches an alternative one
* `/e981971c-ff57-46dc-a932-a60dc1800000` Should fail with an error (Share not found)

Proper routing logic would require more set up / organization of routes per feature. It's not needed for this sample, so
I didn't include any of it.

### Testing

I added some react and redux test. I didn't add more complex integration tests (like tests for the DocumentPage) for the
sake of time, they require quite a bit of set up. Doing them shouldn't be a problem given a something
like [msw](https://mswjs.io/) is already configured.

### Other ideas I would like to explore / improvements

* Adding dependency injection with something like `tsyringe`. Sadly some _magic typing_ information get lost when there
  is no `const store = ...` but I find it more robust than just having global declarations floating around files.
* Doing proper integration testing.
* Doing proper `redux rtk` unit testing (validators / transformers). Didn't seem trivial to do so.
* Experiment with server side rendering. The whole toolkit is prepared to render a preloaded state. I never had
  performance requirements that demanded it, so it would be nice to explore it in a simple sandbox like this one.
* Expand the use of `styled components` to get a better grasp of the API / limitations / pitfalls.

React.memo:
 - React.memo is a higher-order component used to memoize functional components. It's used to prevent unnecessary re-renders of a component by memoizing the result based on its props.
 - It's typically used with functional components to prevent re-renders when the props haven't changed.
 - It compares the previous props and the next props of the component using a shallow equality check. If the props are equal, the component won't re-render.

useMemo:
 - useMemo is a hook used to memoize the result of a function. It memoizes the result of the function call and reuses the memoized result unless the dependencies of the useMemo hook change.
 - It's used to optimize expensive calculations or operations within functional components by caching the result.
 - It takes two arguments: the function to memoize and an array of dependencies. If any of the dependencies change, useMemo will recompute the memoized value; otherwise, it returns the cached result.


In summary, React.memo is used to memoize entire components based on their props, preventing re-renders when the props haven't changed, while useMemo is used to memoize the result of a function within a component, optimizing expensive calculations by caching the result and recomputing only when necessary.



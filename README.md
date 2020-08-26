## The project
This project was create for testing the the DOM manipulation with an Angular Element.

The angular element `CustomComponent` is lazy loaded using [angular elements extensions](https://angular-extensions.github.io/elements).

For building it use the `build-element` npm script and then copy/paste the `main.js` in the `test-app` assets folder.

The `ElementContainerComponent` is created dynamically and then added to the DOM - check `loadElement(id: number, name: string)` function inside `app.component.ts` of `test-app` project.

## The error: "Cannot read property 'bindingStartIndex' of null"
The `loadToolbar()` function cannot render properly the component that is created getting the `ComponentFactory<any>` of the `ToolbarComponent` coming from the lazy loaded angular element.
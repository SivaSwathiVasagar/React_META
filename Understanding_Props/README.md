# React Basics

This for learning react basics from React Basics (META).

- how to use props?
- how to pass props from parent to children?
- explain {props.children}

## Explanation

1. App comp is rendered from Main.jsx file - which is parent for App.
2. App contains header as its child and Header has Nav and Sidebar as its child
3. App comp sends name as props to its child comp Header.
4. Header sends textcolor as props to both of its child comp
5. The content inbetween `<Nav>I am a child</Nav>` is rendered when we have {props.children} in the Nav comp.
6. The content inside ` <Nav textcolor="Blue"/>` is directly passed as props to child comp.
7. ```jsx
   <Nav textcolor="Blue">
     <p style={{ background: "white", color: "Black" }} name="P From Header.">
       I am 1st P tag from Header
     </p>
   </Nav>
   ```

8. name="P From Header." This is Child props of parent props and can be accessed as props(here this is parent props).children.props.name, because this is nested child props of parent props.
9. If we have more than 1 html tag inside `<Nav>`, then the parent props has "Array" of child props. To access this we should use index.

# Konvo


- **summary**
    - conversation tracking
    - as the stack of things that the average person has to keep in mind grows, thinking becomes harder and harder. long thought chains are hard to keep in mind, especially if the symbols they reference are complex enough to come with their own big stacks. traditional note keeping (evernote, keep) can help, but dont have structure built-in, and users are thus forced to come up with their own suboptimal structure. thinking tools provide structure for different contexts.
    - for conversations specifically: keep track of main convo vs side tangentially related topics, or concepts that have to be discussed / explained to be able to advance with the main conversation
- **specs**
    - input: user has to be able to input current topic **very quickly**
    - graph: has to instanteously show updated conversation flow diagram
- **graph**
    - nodes are topics, edges connect subsequent topics
    - main thread: red edges
    - side thread: gray edges, smaller nodes, orthogonal from main thread
- **visual**
    - [figma](https://www.figma.com/file/cUrqvNPOt0B5K8VSK91kfg/Konvo-main)
    - inputs are in nodes themselves: user can change text of nodes inside them by clicking on them
    - main thread connected by red arrows, side thread connected by gray ones
- **implementation**
    - dont have backend for now, no server / hosted db needed
    - js with typescipt, vue 3
    - node (newest version)
    
- **roadmap after mvp**
    - details for topics
    - collapse side threads
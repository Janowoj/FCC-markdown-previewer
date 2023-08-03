import { useState } from 'react';
import './App.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const defaultMarkdown =
  `# Here is my React Markdown Previewer!

## Look at these examples:
---
---
## **HEADINGS**:
---    
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6


...also You can type:



Heading 1
=========
Heading 2
---------

---
## **EMPHASIS**:
--- 
this is *italicized text*:

*Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
Consequatur possimus in est natus cupiditate iusto ab.*

this is also _italicized text_:

_Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
Architecto dignissimos, voluptatum, deserunt quis similique error veniam eos, 
a praesentium ducimus quo est tempore fugit illo totam suscipit? Nihil, quae iste!_

this is **bold text**:

**Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
Expedita accusamus dolorem asperiores quam vero neque eaque!**

---
## **CODE**:
---

there is some inline code here:

**\`const someCode = < section >some code</section>;\`**

...and there is some block code here:


\`\`\`
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`


---
## **QUOTES**:
---

> Dream big and dare to fail. 

Norman Vaughan

> Every child is an artist. The problem is how to remain an artist once he grows up. 

Pablo Picasso


---
## **LISTS**:
---
For unordered lists: 

* List item 1
* List item 2
* List item 3

or

- List item 1
- List item 2
- List item 3

For ordered lists:

1. List item 1
2. List item 2
3. List item 3

---
## **LINKS**:
---

Click on [link](https://www.freecodecamp.org)

or


Look at this image: 

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`


function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown)

  return (
    <>
      <h1>Markdown Previewer</h1>
      <div className="boxes-container">
        <textarea name="editor" id="editor" value={markdownText} onChange={
          (e) => setMarkdownText(e.target.value)} ></textarea>
        <div id="preview">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </>
  )
}

export default App

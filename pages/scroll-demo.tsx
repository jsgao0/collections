import React from 'react';

function Scroll({ children }) {
  const parentRef = React.useRef(null);
  const [state, setState] = React.useState({
    offsetLeft: 0,
    currentHead: undefined,
    currentTail: undefined,
  });

  function update(target: HTMLDivElement) {
    const children = target.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const childElement = children[i];
      if (childElement instanceof HTMLElement) {
        const offsetLeft = childElement.offsetLeft;
        if (target.scrollLeft >= (offsetLeft - target.offsetLeft)) {
          setState((org) => ({
            ...org,
            offsetLeft: offsetLeft - target.offsetLeft,
            currentHead: childElement,
          }));
          break;
        }
      }
    }
    for (let i = children.length - 1; i >= 0; i--) {
      const childElement = children[i];
      if (childElement instanceof HTMLElement) {
        const offsetLeft = childElement.offsetLeft;
        const offsetWidth = childElement.offsetWidth;
        if (target.scrollLeft + target.offsetWidth >= (offsetLeft - target.offsetLeft + offsetWidth)) {
          setState((org) => ({
            ...org,
            currentTail: childElement,
          }));
          break;
        }
      }
    }
  }

  React.useEffect(() => {
    function scroll(event) {
      update(event.currentTarget);
    }
    update(parentRef.current);
    parentRef.current?.addEventListener('scroll', scroll);
    return () => {
      parentRef.current?.removeEventListener('scroll', scroll);
    }
  }, []);
  
  return (
    <>
      <button onClick={() => {
        state.currentHead?.previousSibling?.scrollIntoView({behavior: "smooth"});
      }}>Left</button>
      <div ref={parentRef} style={{
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
      }}>{children}</div>
      <button onClick={() => {
        state.currentTail?.nextSibling?.scrollIntoView({behavior: "smooth"});
      }}>Right</button>
    </>
  )
}

function Item({ index }) {
  return (
    <div style={{
      width: 100,
      height: 100,
      flexShrink: 0,
      backgroundColor: index % 2 === 0 ? '#000' : '#fff',
      color: index % 2 === 0 ? '#fff' : '#000',
    }}>{index}</div>
  )
}

export default function ScrollDemo() {
  return (
    <Scroll>
      {Array(100).fill(1).map((n, i) => (
        <Item key={i} index={i} />
      ))}
    </Scroll>
  )
}
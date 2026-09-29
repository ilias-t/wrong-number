# Wrong Number

*Notes, but every note gets its own stranger.*

**Try it:** https://iliastsangaris.com/wrong-number/

Every notes app eventually loses your notes. Wrong Number fixes this by never keeping them in the first place. When you write a note, we text it to a randomly selected stranger, who becomes its sole custodian. Want to add to a note? Just keep texting the same stranger. Want a new note? That's a new stranger, every time, no exceptions. Retrieval is on the roadmap. Distributed, human-in-the-loop, zero-knowledge storage: we have zero knowledge of where your notes are, and so do you.

## How to run

```sh
bun serve.ts
```

Then open http://127.0.0.1:4545. Or skip the server and open `index.html` directly in a browser. It works fully offline.

Use the `...` menu in the sidebar and choose **Reset demo** (click it twice) to forget every stranger and start clean.

## Safety

This is a simulation that never sends anything. There are no network requests, no SMS or phone links, and no providers. A Content-Security-Policy in the page blocks outbound connections too. Every phone number is in the `(AAA) 555-01XX` range, which is reserved for fiction. All replies are canned and generated in the browser tab.

import React from "react";
import fs from "fs";
import path from "path";
import { marked } from "marked";

// This component will render the main documentation page using the markdown from docs/getting-started.md

const GettingStartedMarkdown = () => {
  // In a real app, you would fetch or import the markdown content at build time or via API
  // For this example, we use a static import (replace with dynamic fetch if needed)
  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    fetch("/docs/getting-started.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="prose max-w-3xl mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  );
};

const Docs = () => {
  return (
    <main className="min-h-screen bg-background">
      <h1 className="text-3xl font-bold text-center mt-8 mb-4">
        Documentation
      </h1>
      <GettingStartedMarkdown />
    </main>
  );
};

export default Docs;

import Mobile from "./mobile";

const App = () => {
  const savePageAs = () => {
    const htmlContent = document.documentElement.outerHTML;

    const blob = new Blob([htmlContent], { type: "text/html" });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "Site.html";

    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div>
        <h1>Save Page As Example</h1>
        <button onClick={savePageAs}>Save Page As</button>
        <Mobile/>
    </div>
  );
};

export default App;

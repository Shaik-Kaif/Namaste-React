const heading= React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hi I am a h1 tag"),React.createElement("h2",{},"H2 tag")]),React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hi I am a h1 tag"),React.createElement("h2",{},"H2 tag")])]);
const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(heading);

import "./Sidebar.css";
export default function Sidebar(props: {
  models: Array<{ name: string; displayName: string }>;
  selectedModel: string;
  onSelectModel: any;
  setOpenAIKey: any;
  openAIKey: string;
}) {
  const handleOpenAIButtonClick = () => {
    const key = prompt("Please enter your OpenAI key", props.openAIKey);
    if (key != null) {
      props.setOpenAIKey(key);
    }
  };
  console.log("Line 16");
  return (
    <>
      <div className="sidebar">
        <div className="logo">
        <a href='https://www.evalueserve.com/in-en/'> EVALUESERVE </a>

        <div className='website'>
            <a href='https://dir.evalueserve.com/dir/home'>Digital Intelligence & Robotics(DIR)</a>
        </div>
        </div>
        <div className="settings">
            <label className="header">Settings</label>
            <label>Model</label>
            <select
            value={props.selectedModel}
            onChange={(event) => props.onSelectModel(event.target.value)}
            >
            {props.models.map((model, index) => {
                return (
                <option key={index} value={model.name}>
                    {model.displayName}
                </option>
                );
            })}
            </select>
            <label>Credentials</label>
            <button onClick={handleOpenAIButtonClick}>Set OpenAI key</button>
        </div>
      </div>
    </>
  );
}

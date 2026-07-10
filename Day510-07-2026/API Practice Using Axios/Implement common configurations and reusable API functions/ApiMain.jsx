import {getUsers,addUser,updateUser,updateEmail,deleteUser,} from "./UserApi";
function ApiMain() {
  return (
    <div>
      <h1>Implement common configurations and reusable API functions</h1>
      <button onClick={() => getUsers().then(res => console.log(res.data))}>GET</button>
      <br /><br />
      <button onClick={() => addUser().then(res => console.log(res.data))}>POST</button>
      <br /><br />
      <button onClick={() => updateUser().then(res => console.log(res.data))}>PUT</button>
      <br /><br />
      <button onClick={() => updateEmail().then(res => console.log(res.data))}>PATCH</button>
      <br /><br />
      <button onClick={() => deleteUser().then(() => console.log("User Deleted"))}>DELETE</button>
    </div>
  );
}
export default ApiMain;
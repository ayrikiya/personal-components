/*
 * @Author: 王荣
 * @Date: 2022-02-11 14:25:28
 * @LastEditors: 王荣
 * @LastEditTime: 2022-02-25 16:35:12
 * @Description: 填写简介
 */
// import Dialog from  './dialog/Dialog';
import { Provider } from 'react-redux';
import { store } from './reduxToolkitDemo/store';
import { Project } from './reduxToolkitDemo/view/project';
import { UseEffectDemo } from './useEffectDemo';

function App() {
  return (
	<Provider store={store}>
		<div className="App">
			<Project></Project>
			<UseEffectDemo />
		</div>
	</Provider>
  );
}


export default App;

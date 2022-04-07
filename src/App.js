import styled from 'styled-components';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import './App.css';


const Div = styled.div``;

function App() {
  return (
    <Div>
      <Sidebar />
      <Dashboard />
    </Div>
  );
}

export default App;

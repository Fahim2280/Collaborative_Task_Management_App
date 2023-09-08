import Navbar from "../components/Navbar";

const Dashboard = () => {

    const customSession = () => {
        const token = localStorage.getItem('token');
        return token;
    }


  return (
    <div>
        <Navbar />
    </div>
  )
}

export default Dashboard
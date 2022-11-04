import { Link } from "react-router-dom"

const Student = () => {
    return (
        <div className="studpage">
            <div className="secpage">
                <h1 className="second">Students Details</h1>
                <button className="but1"><Link to='/add' className="addstu">Add Student</Link></button>
            </div>
            <div className="table">
                <table style={{ width: "70%" }}>
                    <tr style={{ height: "40px" }}>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                    <tr style={{ height: "40px" }}>

                        <td>Patrick Bateman</td>
                        <td>27</td>
                        <td>MERN</td>
                        <td>October</td>
                        <td><Link to='/edit'>Edit</Link></td>

                    </tr>
                    <tr style={{ height: "40px" }}>

                        <td>Travis Bickle</td>
                        <td>30</td>
                        <td>MERN</td>
                        <td>September</td>
                        <td><Link to='/edit'>Edit</Link></td>

                    </tr> <tr style={{ height: "40px" }}>

                        <td>Kenny Ackerman</td>
                        <td>56</td>
                        <td>MERN</td>
                        <td>May</td>
                        <td><Link to='/edit'>Edit</Link></td>

                    </tr> <tr style={{ height: "40px" }}>

                        <td>Lou Bloom</td>
                        <td>25</td>
                        <td>MERN</td>
                        <td>August</td>
                        <td><Link to='/edit'>Edit</Link></td>

                    </tr> <tr style={{ height: "40px" }}>

                        <td>Anton Chigur</td>
                        <td>42</td>
                        <td>MERN</td>
                        <td>January</td>
                        <td><Link to='/edit'>Edit</Link></td>

                    </tr> <tr style={{ height: "40px" }}>

                        <td>Hannibal Lector</td>
                        <td>60</td>
                        <td>MERN</td>
                        <td>December</td>
                        <td><Link to='/edit'>Edit</Link></td>

                    </tr> <tr style={{ height: "40px" }}>

                        <td>Norman Bates</td>
                        <td>24</td>
                        <td>MERN</td>
                        <td>March</td>
                        <td><Link to='/edit'>Edit</Link></td>

                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Student
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import {data} from "../../Constants/MainConstants"


const RecentAnalyze = () => {
    return(
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                {/*<YAxis />*/}
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="mobilography" stroke="#8884d8" activeDot={{ r: 10 }} />
                <Line type="monotone" dataKey="computer_science" stroke="#82ca9d" />
                <Line type="monotone" dataKey="kazakh_language" stroke="#2D9CDB" />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default RecentAnalyze

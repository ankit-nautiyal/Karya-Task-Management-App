import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

export default function StatusMenu({ status, onChange }) {
    return (
        <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Status</InputLabel>
            <Select
                value={status}
                onChange={(e) => onChange(e.target.value)}
                // sx={{
                //     backgroundColor: status === "in-progress" ? "#FFD700" :
                //                     status === "todo" ? "#ADD8E6" :
                //                     status === "done" ? "#90EE90" : "white",
                //     color: "black",
                // }}
                sx={{borderRadius: '50px'}}
            >
                <MenuItem value="todo">📌 To-Do</MenuItem>
                <MenuItem value="in-progress">⚙️ In-Progress</MenuItem>
                <MenuItem value="done">✅ Done</MenuItem>
            </Select>
        </FormControl>
    );
}

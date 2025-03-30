import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

export default function PriorityMenu({ priority, onChange }) {
    return (
        <FormControl size="small" sx={{ minWidth: 120,  }}>
            <InputLabel>Priority</InputLabel>
            <Select
                value={priority}
                onChange={(e) => onChange(e.target.value)}
                // sx={{
                //     backgroundColor: priority === "High" ? "red" :
                //                     priority === "Medium" ? "orange" :
                //                     priority === "Low" ? "green" : "white",
                //     color: "black",
                // }}

                sx={{borderRadius: '50px'}}
            >
                <MenuItem value="High">🔴 High</MenuItem>
                <MenuItem value="Medium">🟡 Medium</MenuItem>
                <MenuItem value="Low">🟢 Low</MenuItem>
            </Select>
        </FormControl>
    );
}

import { useDispatch, useSelector } from "react-redux";
import {  setFilterOption } from "../features/taskSlice.jsx";
import { Button, Menu, MenuItem, Typography, Box, Popper, Paper, Grow, ClickAwayListener } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState, useRef } from "react";
import { styled } from "@mui/material/styles";


const SubMenuPaper = styled(Paper)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: "100%", // Position to the right of the parent menu
    minWidth: 180,
}));


export default function FilterMenu() {
    const dispatch = useDispatch();
    const filterOption = useSelector(state => state.todo.filterOption); // Get from Redux
    const [anchorEl, setAnchorEl] = useState(null); // For main menu
    const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null); // For sub-menus
    const [activeSubMenu, setActiveSubMenu] = useState(null); // Which sub-menu is open
    const menuRefs = {
        status: useRef(null),
        date: useRef(null),
        priority: useRef(null),
    };

    const handleOpenMainMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMainMenu = () => {
        setAnchorEl(null);
        setSubMenuAnchorEl(null);
        setActiveSubMenu(null);
    };

    const handleOpenSubMenu = (category, ref) => (event) => {
        setSubMenuAnchorEl(ref.current);
        setActiveSubMenu(category);
    };

    const handleCloseSubMenu = () => {
        setSubMenuAnchorEl(null);
        setActiveSubMenu(null);
    };

    const handleFilterChange = (option) => () => {
        dispatch(setFilterOption(option));
        handleCloseMainMenu(); // Close all menus after selection
    };

    const categories = [
        {
            label: "Status",
            key: "status",
            options: [
                { value: "todo", label: "📌 To-Do" },
                { value: "in-progress", label: "⚙️ In-Progress" },
                { value: "done", label: "✅ Done" },
            ],
        },
        {
            label: "Date",
            key: "date",
            options: [
                { value: "default", label: "Default Order" },
                { value: "oldest-first", label: "Oldest First" },
                { value: "latest-first", label: "Newest First" },
            ],
        },
        {
            label: "Priority",
            key: "priority",
            options: [
                { value: "high", label: "🔴 High" },
                { value: "medium", label: "🟡 Medium" },
                { value: "low", label: "🟢 Low" },
                { value: "high-low", label: "High to Low" },
                { value: "low-high", label: "Low to High" },
            ],
        },
    ];

    return (
        <Box>
            <Button
                variant="contained"
                onClick={handleOpenMainMenu}
                sx={{ color: "white", backgroundColor: "#1976d2" }}
            >
                Filter & Sort 
            </Button>

            {/* Main Menu */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMainMenu}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
                {categories.map((category) => (
                    <MenuItem
                        key={category.key}
                        ref={menuRefs[category.key]}
                        onClick={handleOpenSubMenu(category.key, menuRefs[category.key])}
                        sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                        <Typography>{category.label}</Typography>
                        <ArrowRightIcon />
                    </MenuItem>
                ))}
            </Menu>

            {/* Sub-Menu */}
            {activeSubMenu && (
                <Popper
                    open={Boolean(subMenuAnchorEl)}
                    anchorEl={subMenuAnchorEl}
                    placement="right-start"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Grow {...TransitionProps}>
                            <SubMenuPaper>
                                <ClickAwayListener onClickAway={handleCloseSubMenu}>
                                    <Menu
                                        open={Boolean(subMenuAnchorEl)}
                                        anchorEl={subMenuAnchorEl}
                                        onClose={handleCloseSubMenu}
                                        disableAutoFocusItem
                                    >
                                        {categories
                                            .find((cat) => cat.key === activeSubMenu)
                                            ?.options.map((option) => (
                                                <MenuItem
                                                    key={option.value}
                                                    onClick={handleFilterChange(option.value)}
                                                    selected={filterOption === option.value}
                                                >
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                    </Menu>
                                </ClickAwayListener>
                            </SubMenuPaper>
                        </Grow>
                    )}
                </Popper>
            )}
        </Box>
    );
}

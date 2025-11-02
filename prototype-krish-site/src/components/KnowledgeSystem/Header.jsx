
function Header({heading}) {
    return (
        <div className="border border-dark rounded fw-bold fs-2">
            <span style={{marginLeft: "1%"}}>{heading}</span>
            <span style={{float: "right", marginRight: "1%"}}>Make-It-All Productivity & Knowledge System</span>
        </div>
    )
}

export default Header
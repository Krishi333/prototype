
function Header({heading}) {
    return (
        <div className="border border-dark rounded fw-bold fs-2" style={{backgroundColor: "white"}}>
            <span style={{marginLeft: "1%", color: "oklch(0.15 0.03 82)"}}>{heading}</span>
            <span style={{float: "right", marginRight: "1%", color: "oklch(0.15 0.03 82)"}}>Make-It-All Productivity & Knowledge System</span>
        </div>
    )
}

export default Header
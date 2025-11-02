import Header from "../Header"
import Comments from "./Comments"

function Post({onClickBack}) {

    return (
        <div className="p-3">
            <Header heading="Specific Post"/>
            <div style={{textAlign: "center", marginTop: "1%", marginBottom: "1%", backgroundColor: "oklch(0.88 0.015 82)"}} className="border border-dark rounded">
                <span className="fw-bold fs-1" style={{color: "oklch(0.15 0.03 82)"}}>Post Name</span>
                <button className="btn border border-dark rounded" onClick={onClickBack} style={{float: "left", marginTop: "0.75%", marginLeft: "1%", 
                    color: "oklch(0.15 0.03 82)", backgroundColor: "oklch(0.94 0.015 82)"}}>Back</button>
            </div>
            <div className="border border-dark rounded" style={{marginBottom: "2%", backgroundColor: "oklch(0.88 0.015 82)"}}>
                <p style={{margin: "1%", color: "oklch(0.4 0.03 82)"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis enim orci,
                     at scelerisque augue imperdiet non.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a cursus orci. Donec mattis nisl et sapien tempus, sit
                  amet pellentesque urna commodo. Cras gravida rutrum elit, at sodales justo scelerisque id. Mauris dignissim, mi dignissim 
                  consequat sodales, lorem nibh ornare nisl, eget lobortis lorem ante in libero. Nam euismod nulla tortor, at consectetur diam consequat sit amet.
                  <br/>
                  Phasellus ex nisl, aliquam faucibus consequat quis, venenatis vel leo. Proin sed enim risus. Quisque faucibus nibh at volutpat efficitur. Donec 
                  pretium cursus est vel condimentum. Morbi eu sapien id elit rutrum porttitor in non ante. Praesent dapibus massa est, sed venenatis velit pellentesque 
                  ac. Vestibulum dignissim est congue, elementum magna eget, rhoncus urna. Nulla facilisi. Donec dictum nunc vel tincidunt laoreet. Quisque sit amet 
                  purus rutrum, vulputate dolor at, ultricies purus. Nulla vel tristique nisl, sit amet vestibulum mi. Suspendisse pharetra ante ac accumsan ullamcorper.
                   Cras vel elit finibus, blandit purus ut, scelerisque libero. Sed maximus mi a maximus bibendum.
                   <br/>
                   Fusce ut nulla a magna faucibus scelerisque. Ut vel lacinia est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    In hac habitasse platea dictumst. Ut sit amet vehicula sapien. Integer convallis libero ut posuere dignissim. Nam placerat ex nec efficitur tincidunt.
                     Morbi facilisis ipsum id placerat porttitor. Vestibulum vitae urna in nunc posuere mollis. Cras et sapien nisi.
                </p>
                <button style={{float: "right", marginRight: "1%", marginBottom: "1%", color: "oklch(0.15 0.03 82)",
                     backgroundColor: "oklch(0.94 0.015 82)"}} className="btn btn-primary border border-dark rounded">Edit</button>
                <div style={{clear: "both"}}/>
            </div>

            <Comments num="1"/>
            <Comments num="2"/>
            <Comments num="3"/>
            <Comments num="4"/>
            <Comments num="5"/>
            <Comments num="6"/>
            <Comments num="7"/>
            <Comments num="8"/>

        </div>
    )
}

export default Post
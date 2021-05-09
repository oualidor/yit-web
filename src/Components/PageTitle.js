import React from "react";
import "../Style/Components/PageTitle.css"

import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const PageTitle = ({id, title, name, coders, desingers, policy, technologies, link}) => {
    return(
        <React.Fragment>
            <section className={"PageTitle"} id={id}>
                {title}
            </section>
        </React.Fragment>
    )
}


export default PageTitle
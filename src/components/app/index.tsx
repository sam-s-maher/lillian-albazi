import React from "react";

import WebsiteUnderConstruction from "components/website-under-construction";
// import Header from "components/header";
// import Banner from "components/banner";
// import AlbumFeature from "components/album-feature";
// import GigList from "components/gig-list";
// import Contact from "components/contact";
// import Friends from "components/friends";

export interface IAppProps {}

const App = (props: IAppProps) => {
    return (
        <div>
            <WebsiteUnderConstruction />
            {/* <Header />
            <Banner />
            <AlbumFeature />
            <GigList />
            <Contact />
            <Friends /> */}
        </div>
    );
}

export default App;
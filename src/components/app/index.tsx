import React from "react";

import Header from "components/header";
import AlbumCta from "components/album-cta";
import GigList from "components/gig-list";
import Contact from "components/contact";
import Friends from "components/friends";

export interface IAppProps {}

const App = (props: IAppProps) => {
    return (
        <div>
            <Header />
            <AlbumCta />
            <GigList />
            <Contact />
            <Friends />
        </div>
    );
}

export default App;
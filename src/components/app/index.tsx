import React from "react";

import Header from "components/header";
import AlbumCta from "components/album-cta";
import GigList from "components/gig-list";
import Contact from "components/contact";
import FooterTag from "components/footer-tag";
import ArticleQuote from "components/article-quote";

export interface IAppProps {}

const App = (props: IAppProps) => {
    return (
        <div>
            <Header />
            <AlbumCta id="album" />
            <GigList id="gigs" />
            <Contact id="contact" />
            <FooterTag />
        </div>
    );
}

export default App;
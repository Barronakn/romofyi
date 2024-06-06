import React from 'react';
import { Head as SeoHead , usePage } from '@inertiajs/react';
import favicon from "../../../public/favicon.ico";

const Head = ({title, description, keywords}) => {

    const {url} = usePage();
    const {app} = usePage().props;

    return (
        <SeoHead>
            <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="shortcut icon" href={favicon} type="image/x-icon" />

                <meta name='name' content={title} />
                <meta name='image' content={favicon} />

                {/* Twitter Card data */}
                <meta name='twitter:site' content={app.name} />
                <meta name='twitter:creator' content={app.name} />
                <meta name='twitter:card' content={app.name} />
                <meta name='twitter:title' content={title} />
                <meta name='twitter:description' content={description} />
                <meta name='twitter:image:src' content={favicon} />

                {/* Open Graph data */}
                <meta property='og:site_name' content={app.name} />
                <meta property='og:url' content={app.url + url} />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={title} />
                <meta property='og:description' content={description} />
                <meta property='og:image' content={favicon} />
        </SeoHead>
    );
};

export default Head;

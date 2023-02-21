import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const caregoryNews = useLoaderData();
    return (
        <div>
            <h2>This Category has news: {caregoryNews.length}</h2>

            {
                caregoryNews.map( news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }

        </div>
    );
};

export default Category;
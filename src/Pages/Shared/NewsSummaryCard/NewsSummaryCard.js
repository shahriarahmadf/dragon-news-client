import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({news}) => {
    const {_id, title, author, details, rating, image_url, total_view} = news;

    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image 
                    className='me-2'
                    src={author.img}
                    roundedCircle
                    style= {{height: '60px'}}
                    ></Image>
                    <div>
                        <p className='mb-0'>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url}></Card.Img>
                <Card.Text>
                    {details.length > 250 ? 
                        <span>
                            {details.slice(0,250) + '...'} <Link to={`/news/${_id}`}>Read more</Link>
                        </span>
                        :
                        <span>
                            {details}
                        </span>
                    }
                </Card.Text>

            </Card.Body>

            <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
      </Card>
    );
};

export default NewsSummaryCard;
import React from 'react';
import ImageGallery from 'react-image-gallery';
import mr_leo_image from './../images/mr_leo.jpeg';
import { Media, Card, Fa } from 'mdbreact';
import './Post.css';

export default class Post extends React.Component {
    render() {
        const images = [
            {
                original: 'http://localhost/Muweb/src/background-images/muzikol_front_image5.png',
                thumbnail: 'http://localhost/Muweb/src/background-images/muzikol_front_image5.png',
            },
            {
                original: 'https://www.muzikol.com/images/about/nges.jpg',
                thumbnail: 'https://www.muzikol.com/images/about/nges.jpg',
            },
            {
                original: 'https://www.muzikol.com/Fan/nembosteph@gmail.com2017/profile_pic/current',
                thumbnail: 'https://www.muzikol.com/Fan/nembosteph@gmail.com2017/profile_pic/current',
            },
            {
                original: 'https://www.muzikol.com/images/about/perside.jpg',
                thumbnail: 'https://www.muzikol.com/images/about/perside.jpg',
            },
            {
                original: 'https://www.muzikol.com/images/about/lesly.jpg',
                thumbnail: 'https://www.muzikol.com/images/about/lesly.jpg',
            },
            {
                original: 'https://www.muzikol.com/Fan/mesmervoufo@gmail.com2017/profile_pic/current',
                thumbnail: 'https://www.muzikol.com/Fan/mesmervoufo@gmail.com2017/profile_pic/current',
            },
            {
                original: 'https://www.muzikol.com/Fan/oldrik97@gmail.com2017/profile_pic/current',
                thumbnail: 'https://www.muzikol.com/Fan/oldrik97@gmail.com2017/profile_pic/current',
            },
            {
                original: 'https://www.muzikol.com/Fan/nembosteph@gmail.com2017/profile_pic/current',
                thumbnail: 'https://www.muzikol.com/Fan/nembosteph@gmail.com2017/profile_pic/current',
            },
            {
                original: 'https://www.muzikol.com/images/about/typedef.jpg',
                thumbnail: 'https://www.muzikol.com/images/about/typedef.jpg',
            },
        ]

        return (
            <div className="Posts">
                <Card className="">
                    <div className="User-profile">
                        <Media className="py-1">
                            <Media left className="" href="#">
                                <Media object src={mr_leo_image} className="img-fluid z-depth-1 rounded-circle" style={{width:"60px", height:"60px"}} alt="username" />
                            </Media>
                            <Media body className="d-flex align-self-center">
                                Lorem ipsum dolor sit amet, consectateur adicsiping elit. sed do.
                            </Media>
                        </Media>
                    </div>
                    <div className="Posts-text">
                        Hey guys. i am so glad to to inform you that i am organising a talk tomorrow night on muzikol.
                        You are all welcome for the talk. I will be talking on my new song "je suis desole" and say what
                        made me write such a song.
                    </div>
                    <div>
                        <ImageGallery items={images} />
                    </div>
                    <div className="post-reactions">
                        <div className="like-comment-actions">
                            <a type="button" href="/" className="btn btn-white btn-sm"><Fa icon="commenting-o" style={{fontSize: "22px"}} /></a>
                            <a type="button" href="/" className="btn btn-white btn-sm"><Fa icon="thumbs-o-down" style={{fontSize: "22px"}} /></a>
                            <a type="button" href="/" className="btn btn-white btn-sm"><Fa icon="thumbs-o-up" style={{fontSize: "22px"}} /></a>
                        </div>
                        <div className="p-2 mt-2 mb-2"><Fa icon="thumbs-o-up" size="lg" /><span  style={{color: "#666"}}> lorem ipsum color sit amet</span></div>
                        <div className="ml-2 mb-3">
                            <form className="form-inline my-2 my-lg-0 ml-auto mr-auto" style={{width: "100%"}}>
                                <div className="form-sm my-0" style={{width: "100%"}}>
                                    <Fa icon="user-o" size="lg"/><input type="text" id="commentForm" className="form-control ml-2 mr-2" style={{width: "85%"}} placeholder="comment" /><Fa icon="camera" size="lg"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </Card>
            </div>
	    );
    }
}
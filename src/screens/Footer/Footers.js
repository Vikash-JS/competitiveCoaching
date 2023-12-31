const Logos = ({iconName}) => {
    return (
        <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'center'}} > 
            <div style={{marginBottom: 20}} >
            <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
            </div>
            <div style={{marginLeft: 10}}>
            <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
            </div>
            <div style={{marginLeft: 10}}>
            <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
            </div>
            <div style={{marginLeft: 10}}>
            <svg stroke="white" fill="white" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer" >
            <div className="footer-container" >
            <div className="footer-grid" >
                <h6>Resources</h6>
                <p>Courses</p>
                <p>Test Series</p>
                <p>Magazines</p>
            </div>
            <div className="footer-grid" >
                <h6>Support</h6>
                <p>Discussion Community</p>
                <p>Question Community</p>
                <p>Feedback</p>
                <p>Contact</p>
            </div>
            <div className="footer-grid" >
                <h6>Legal</h6>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Delivery and Shipping Policy</p>
            </div>
            <div className="footer-grid" >
                <h6>Quick Links</h6>
                <p>CGPSC Analysis</p>
                <p>Exam Alerts</p>
                <p>Careers</p>
                <p>About Us</p>
                <p>Blogs</p>
            </div>
        </div>
        <hr className="horizontal" />
        <div style={{marginLeft: 10}} className="footer-container">
        <div className="footer-grid" >    
                <p>Head Office: 5th Floor, Real Heaven Business Arcade, opp. Vandana Hospital, Mangla, Bilaspur, Chhattisgarh 495001</p>  
            </div>
            <div className="footer-grid" >
                <p>Bilaspur Gandhi Chowk Branch: 3rd Floor, Above South Cafe, Beside Mahamaya Book Depot, Gandhi Chowk, Bilaspur, Chhattisgarh 495001</p>
            </div>
            <div className="footer-grid" >
                <p>Durg Branch: GK Tower, Canara Bank Building, Beside Bafna Mangalam, Padmanabhpur Durg, 491001</p>
            </div>
        </div>
        <hr className="horizontal" />
        <div>
            <p style={{textAlign: 'center', color: 'white'}} >
            © Coco 2023 | All rights Reserved. Firstman Education Private Limited 
            </p>
        </div>
        <div>
            <Logos />        
        </div>
        </div>
    )
}

export default Footer



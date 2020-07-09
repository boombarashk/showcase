import React from 'react';

const baseUrl = 'https://www.imumk.ru/'
const baseEmail = 'info@imumk.ru'
const socialButtons = [
    { name: 'twitter', className: 'footer-social-icon-tw', link: 'https://twitter.com/oblako_znanij'},
    { name: 'vk', className: 'footer-social-icon-vk', link: 'http://vk.com/oblako_znanij'},
    { name: 'fb', className: 'footer-social-icon-fb', link: 'https://www.facebook.com/oblakoznanij/?ref=oblako'},
    { name: 'instagram', className: 'footer-social-icon-instagram', link: 'https://www.instagram.com/oblako_znanij/'}
]

export const Footer = () => (
    <footer className="footer">
        <div className="footer-wrapper">
            <div className="footer-legal">
                <p>&copy; <a href="http://physiconlab.ru">ООО «Физикон Лаб»</a>, 2013—2020</p>
                <p><a rel="nofollow" href={`${baseUrl}privacy`}>Пользовательское соглашение</a></p>
            </div>

            <div className="footer-social">
                { socialButtons.map( (soc, index) => (
                    <div className={`footer-social-icon ${soc.className}`} key={`footerIcon${index}`}>
                        <a href={soc.link}>{ soc.name }</a>
                    </div>
                )) }
            </div>

            <div className="footer-legal">
                <p><a href="tel:+74987446757">+7 (499) 322-07-57</a>, <a href={`mailto:${baseEmail}`}>{ baseEmail }</a></p>
                <p><a href={`${baseUrl}regulations`}>Правила пользования сайтом</a></p>
            </div>
        </div>
    </footer>
)

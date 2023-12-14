/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'


const Post = () => {
    return (
        <div className='post'>
            <div className='image'>
                <Link>
                    <img
                        src='https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2023/02/financial-broker-explaning-business-data-his-client.jpg'
                        alt=''
                    />
                </Link>
            </div>
            <div className='texts'>
                <Link>
                    <h2>
                        12 ธุรกิจที่น่าสนใจ ในปี 2023 ลงทุนน้อย รายได้ดีชี้ช่องรวย!
                    </h2>
                </Link>
                <p className='info' >
                    <a href='' className='author'>
                        Natthacha
                    </a>
                    <br></br>
                    <time>21 FEBRUARY 2023</time>
                </p>
                <p className='summary'>
                    เทรนด์คร่าว ๆ ของการทำธุรกิจ สำหรับใครที่ไม่รู้ว่าจะเริ่มต้นทำธุรกิจอะไรดี นี่คือไอเดียที่กำลังถูกจับตามอง
                    และเป็นธุรกิจที่มีความก้าวกระโดด โดยเฉพาะชาวคอนโดอนันดาที่กำลังมองหาธุรกิจใหม่ๆ มาลงทุนทำเงินเพื่อให้เกิดความร่ำรวยเร็วทันยุค
                    ซึ่งเราต้องบอกก่อนว่าธุรกิจด้านความงามนั้น ปัจจุบันมาแรงเป็นอันดับต้น ๆ เพราะมีการใช้เทคโนโลยีเข้าช่วย ทำให้ทุกความสวยที่ต้องการเป็นไปได้
                    และต่อมาคือสุขภาพ ที่ผู้คนเริ่มหันมาตระหนักในการดูแลสุขภาพของตัวเองกันมากขึ้น ตามด้วย e-commerce ที่เชื่อมโยงเข้าด้วยกันกับธุรกิจอาหารและเครื่องดื่มแนวสุขภาพได้
                    นอกจากนี้ยังมีธุรกิจที่น่าสนใจอื่น ๆ อีกมากมาย ที่กำลังเติบโต ชวนให้นักลงทุนทุกคนได้ไปลองทำความรู้จักกันให้มากขึ้น
                </p>
            </div>
        </div>
    )
}

export default Post
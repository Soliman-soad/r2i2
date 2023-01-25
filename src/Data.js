import { RiContactsBook2Fill,RiChatFollowUpLine } from "react-icons/ri";
import { VscFeedback, VscDesktopDownload } from "react-icons/vsc";
import { TiTick } from "react-icons/ti";
import { Icon } from '@iconify/react';
import { HiChat } from "react-icons/hi";
import { BsExclamationLg } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";

export const data =[

    {
        date:'30',
        day:'WED',
        month:'Jul',
        task: [
            {
                time:'11:30 AM',
                title:'New task assigned to you',
                name:'Sheila O’Riley',
                color:'#5390EB',
                icon: <RiContactsBook2Fill/>
        },
            {
                time:'11:30 AM',
                title:'New feedback recieved for Task Name',
                name:'Sheila O’Riley',
                color:'#DC395F',
                icon: <VscFeedback/>
        },
            {
                time:'11:30 AM',
                title:'Task marked completed by you',
                name:'Sheila O’Riley',
                color:'#3FB883',
                icon: <TiTick/>
        },
            {
                time:'11:30 AM',
                title:'Task Name updated for journey Journey Name',
                name:'Sheila O’Riley',
                color:'#FB8789',
                icon: <VscDesktopDownload/>
        },
            {
                time:'11:30 AM',
                title:'Follow up on feedback for Task Name completed on Date XX/YY/ZZZZ',
                name:'Sheila O’Riley',
                color:'#F2BB27',
                icon: <RiChatFollowUpLine/>
        },
        ]
    },
    {
        date:'29',
        day:'THU',
        month:'Jul',
        task: [
            {
                time:'11:30 AM',
                title:'Meeting with Bobby Charlie',
                name:'Sheila O’Riley',
                color:'#FFFFFF',
                icon: <Icon icon="logos:google-meet" />
        },
            {
                time:'11:30 AM',
                title:'Chat about Design Mentorship',
                name:'Sheila O’Riley',
                color:'#A259FF',
                icon: <HiChat/>
        },
            {
                time:'11:30 AM',
                title:'Critical delay observed in time line adherence',
                name:'Sheila O’Riley',
                color:'#E94235',
                icon: <BsExclamationLg/>
        },
            {
                time:'11:30 AM',
                title:'Finish project documentation for review (1-1 checkin)',
                name:'Sheila O’Riley',
                color:'#F2DF37',
                icon: <GiSandsOfTime/>
        }
        ]
    }

]
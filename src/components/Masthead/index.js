import React from 'react';
import logo from '../../assets/images/HayDayLogo_FPO.svg';
import TicketButton from '../../components/TicketButton';
import CountdownTimer from '../../components/CountdownTimer';
import './style.scss';

class Masthead extends React.Component {
    render() {
        return (
            <section className="masthead">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <h1 className="title">ms horse park starkville, ms | april 23, 2022</h1>
                <TicketButton />
                <CountdownTimer />
            </section>
        )
    }
}

export default Masthead
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../../context/globalContext';
import History from '../History/History';
import { InnerLayout } from '../../../styles/Layouts';
import { dollar } from '../../../utils/Icons';
import Chart from '../Chart/Chart';
import "../../../styles/Homepage.css";

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <>
       
        <div>
    
        <DashboardStyled>
            <InnerLayout>
            <div className="text-center"><h1 class="h2 mb-10 ">Tous les Transactions</h1></div>
                <div className="stats-conrh">
                    <div className="chart-conrh">
                        <Chart />
                        <div className="amount-conrh">
                            <div className="income">
                                <h2 class="h3 mb-10 "> Révenus <br/> totales</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2 class="h3 mb-10 ">Dépenses totales</h2>
                                <div className="salary-itemrh">
                                <p>
                                    {dollar} {totalExpenses()}
                                </p></div>
                            </div>
                            <div className="balance">
                                <h2 class="h3 mb-10 ">Solde <br/>total</h2>
                                <p >
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-conrh">
                        <History />
                        <h2 className="salary-titlerh">Min <span>Salaires</span>Max</h2>
                        <div className="salary-itemrh">
                            <p>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-titlerh">Min <span>Dépenses</span>Max</h2>
                        <div className="salary-itemrh">
                            <p>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
        </div>
       
        </>
    )
}

const DashboardStyled = styled.div`
    .stats-conrh{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-conrh{
            grid-column: 1 / 4;
            height: 400px;
            .amount-conrh{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .incomerh, .expenserh{
                    grid-column: span 1;
                }
                .incomerh, .expenserh, .balancerh{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

                .balancerh{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            }
        }

        .history-conrh{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-titlerh{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-itemrh{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

export default Dashboard
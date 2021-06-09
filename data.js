------------------------------------------------------
Go to https://graphql.bitquery.io and type in 
------------------------------------------------------
query ($network: EthereumNetwork!,
                              $token: String!,
                              $from: ISO8601DateTime,
                              $till: ISO8601DateTime){
                          ethereum(network: $network){
                            transfers(currency: {is: $token}
                            amount: {gt: 0}
                            date: {since: $from till: $till}
                            ){

                              currency{
                                symbol
                              }

                              median: amount(calculate: median)
                              average: amount(calculate: average)

                              amount
                              count

                              days: count(uniq: dates)

                              sender_count: count(uniq: senders)
                              receiver_count: count(uniq: receivers)

                              min_date:minimum(of: date)
                              max_date:maximum(of: date)
                            }
                          }
                        }
                        ------------------------------------------------------
                        network
                        ------------------------------------------------------
                        {"limit":10,"offset":0,"network":"bsc","token":"0x84b2537ef5a872a7c67fb03c6cefc51dd4be3c68"}

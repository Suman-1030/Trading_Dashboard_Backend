const express= require('express')
const cors= require('cors')

const app=express()
PORT=4000

app.use(cors())

app.get('/Analytics',(req,res)=>{

  const data = {
    
    winRate: (30 + Math.random() * 40).toFixed(2), 
  
   
    profitFactor: (0.8 + Math.random() * 1.7).toFixed(2), 
  
    
    averageReturn: (-2 + Math.random() * 7).toFixed(2), 
  
 
    maxDrawdown: (5 + Math.random() * 25).toFixed(2), 
  
    
    totalTrades: Math.floor(500 + Math.random() * 1000), 
  
 
    winningTrades: 0, 
    losingTrades: 0,  
  
   
    longestWinStreak: Math.floor(3 + Math.random() * 15), // 3–18 trades
    longestLossStreak: Math.floor(1 + Math.random() * 8), // 1–8 trades
  
   
    sharpeRatio: (0.5 + Math.random() * 1.5).toFixed(2), 
  
   
    plBreakdown: {
      currency: (-10000 + Math.random() * 60000).toFixed(2),
      percent: (-20 + Math.random() * 100).toFixed(2)
    },
  
  
    recentTrades: Array.from({ length: 10 }, (_, i) => {
      const isWin = Math.random() < 0.55; 
      return {
        id: i + 1,
        symbol: ["AAPL", "TSLA", "AMZN", "BTC", "ETH"][Math.floor(Math.random() * 5)],
        result: isWin ? "WIN" : "LOSS",
        returnPct: (isWin ? Math.random() * 5 : -Math.random() * 3).toFixed(2)
      };
    })
  };
  
  
  data.winningTrades = Math.floor((data.winRate / 100) * data.totalTrades);
  data.losingTrades = data.totalTrades - data.winningTrades;
  
  res.status(200).json({ data });
  

})
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})




library(UsingR)
library(ggplot2)
library(readr)
library(dplyr)
library(tidyverse)
library(plyr)

stock_info <- read.csv("FinalPrices.csv")

#AAPL
set_AAPL = subset(stock_info, stock_info$Ticker == "AAPL")
sd_AAPL <- sd(set_AAPL$Adj.Close)
final_AAPL <- sd_AAPL/100
print(final_AAPL)

#MSFT
set_MSFT = subset(stock_info, stock_info$Ticker == "MSFT")
sd_MSFT <- sd(set_MSFT$Adj.Close)
final_MSFT <- sd_MSFT/100
print(final_MSFT)

#GOOGL
set_GOOGL = subset(stock_info, stock_info$Ticker == "GOOGL")
sd_GOOGL <- sd(set_GOOGL$Adj.Close)
final_GOOGL <- sd_GOOGL/100
print(final_GOOGL)

#AMZN
set_AMZN = subset(stock_info, stock_info$Ticker == "AMZN")
sd_AMZN <- sd(set_AMZN$Adj.Close)
final_AMZN <- sd_AMZN/100
print(final_AMZN)

#BRK-B
set_BRKB = subset(stock_info, stock_info$Ticker == "BRK-B")
sd_BRKB <- sd(set_BRKB$Adj.Close)
final_BRKB <- sd_BRKB/100
print(final_BRKB)

#UNH
set_UNH = subset(stock_info, stock_info$Ticker == "UNH")
sd_UNH <- sd(set_UNH$Adj.Close)
final_UNH <- sd_UNH/100
print(final_UNH)

#XOM
set_XOM = subset(stock_info, stock_info$Ticker == "XOM")
sd_XOM <- sd(set_XOM$Adj.Close)
final_XOM <- sd_XOM/100
print(final_XOM)

#JNJ
set_JNJ = subset(stock_info, stock_info$Ticker == "JNJ")
sd_JNJ <- sd(set_JNJ$Adj.Close)
final_JNJ <- sd_JNJ/100
print(final_JNJ)

#JPM
set_JPM = subset(stock_info, stock_info$Ticker == "JPM")
sd_JPM <- sd(set_JPM$Adj.Close)
final_JPM <- sd_JPM/100
print(final_JPM)

#NVDA
set_NVDA = subset(stock_info, stock_info$Ticker == "NVDA")
sd_NVDA <- sd(set_NVDA$Adj.Close)
final_NVDA <- sd_NVDA/100
print(final_NVDA)

#WMT
set_WMT = subset(stock_info, stock_info$Ticker == "WMT")
sd_WMT <- sd(set_WMT$Adj.Close)
final_WMT <- sd_WMT/100
print(final_WMT)

#CVX
set_CVX = subset(stock_info, stock_info$Ticker == "CVX")
sd_CVX <- sd(set_CVX$Adj.Close)
final_CVX <- sd_CVX/100
print(final_CVX)

#PG
set_PG = subset(stock_info, stock_info$Ticker == "PG")
sd_PG <- sd(set_PG$Adj.Close)
final_PG <- sd_PG/100
print(final_PG)

#LLY
set_LLY = subset(stock_info, stock_info$Ticker == "LLY")
sd_LLY <- sd(set_LLY$Adj.Close)
final_LLY <- sd_LLY/100
print(final_LLY)

#MA
set_MA = subset(stock_info, stock_info$Ticker == "MA")
sd_MA <- sd(set_MA$Adj.Close)
final_MA <- sd_MA/100
print(final_MA)


#HD
set_HD = subset(stock_info, stock_info$Ticker == "HD")
sd_HD <- sd(set_HD$Adj.Close)
final_HD <- sd_HD/100
print(final_HD)

#BAC
set_BAC = subset(stock_info, stock_info$Ticker == "BAC")
sd_BAC <- sd(set_BAC$Adj.Close)
final_BAC <- sd_BAC/100
print(final_BAC)

#PFE
set_PFE = subset(stock_info, stock_info$Ticker == "PFE")
sd_PFE <- sd(set_PFE$Adj.Close)
final_PFE <- sd_PFE/100
print(final_PFE)

#ABBV
set_ABBV = subset(stock_info, stock_info$Ticker == "ABBV")
sd_ABBV <- sd(set_ABBV$Adj.Close)
final_ABBV <- sd_ABBV/100
print(final_ABBV)

#KO
set_KO = subset(stock_info, stock_info$Ticker == "KO")
sd_KO <- sd(set_KO$Adj.Close)
final_KO <- sd_KO/100
print(final_KO)

#MRK
set_MRK = subset(stock_info, stock_info$Ticker == "MRK")
sd_MRK <- sd(set_MRK$Adj.Close)
final_MRK <- sd_MRK/100
print(final_MRK)

#PEP
set_PEP = subset(stock_info, stock_info$Ticker == "PEP")
sd_PEP <- sd(set_PEP$Adj.Close)
final_PEP <- sd_PEP/100
print(final_PEP)

#COST
set_COST = subset(stock_info, stock_info$Ticker == "COST")
sd_COST <- sd(set_COST$Adj.Close)
final_COST <- sd_COST/100
print(final_COST)

#TMO
set_TMO = subset(stock_info, stock_info$Ticker == "TMO")
sd_TMO <- sd(set_TMO$Adj.Close)
final_TMO <- sd_TMO/100
print(final_TMO)

#AVGO
set_AVGO = subset(stock_info, stock_info$Ticker == "AVGO")
sd_AVGO <- sd(set_AVGO$Adj.Close)
final_AVGO <- sd_AVGO/100
print(final_AVGO)

#ORCL
set_ORCL = subset(stock_info, stock_info$Ticker == "ORCL")
sd_ORCL <- sd(set_ORCL$Adj.Close)
final_ORCL <- sd_ORCL/100
print(final_ORCL)

#TSLA
set_TSLA = subset(stock_info, stock_info$Ticker == "TSLA")
sd_TSLA <- sd(set_TSLA$Adj.Close)
final_TSLA <- sd_TSLA/100
print(final_TSLA)

#DHR
set_DHR = subset(stock_info, stock_info$Ticker == "DHR")
sd_DHR <- sd(set_DHR$Adj.Close)
final_DHR <- sd_DHR/100
print(final_DHR)

#PSA
set_PSA = subset(stock_info, stock_info$Ticker == "PSA")
sd_PSA <- sd(set_PSA$Adj.Close)
final_PSA <- sd_PSA/100
print(final_PSA)

#APD
set_APD = subset(stock_info, stock_info$Ticker == "APD")
sd_APD <- sd(set_APD$Adj.Close)
final_APD <- sd_APD/100
print(final_APD)

#MSI
set_MSI = subset(stock_info, stock_info$Ticker == "MSI")
sd_MSI <- sd(set_MSI$Adj.Close)
final_MSI <- sd_MSI/100
print(final_MSI)

#DKNG
set_DKNG = subset(stock_info, stock_info$Ticker == "DKNG")
sd_DKNG <- sd(set_DKNG$Adj.Close)
final_DKNG <- sd_DKNG/100
print(final_DKNG)

#GME
set_GME = subset(stock_info, stock_info$Ticker == "GME")
sd_GME <- sd(set_GME$Adj.Close)
final_GME <- sd_GME/100
print(final_GME)





vector_values <- c(final_AAPL, final_MSFT, final_GOOGL, final_AMZN, final_BRKB, final_UNH, final_XOM,
                  final_JNJ, final_JPM, final_NVDA, final_WMT, final_CVX, final_PG, final_LLY, final_MA, 
                  final_HD, final_BAC, final_PFE, final_KO, final_MRK, final_PEP, final_COST, final_TMO, 
                  final_AVGO, final_ORCL, final_TSLA, final_DHR, final_PSA, final_APD, 
                  final_MSI, final_DKNG, final_GME )

print(max(vector_values))

print(vector_values)

normalized_vector = vector_values * 1.65887603186

print(max(normalized_vector))

vector_names <- c("AAPL", "MSFT", "GOOGL","AMZN", "BRK-B", "UNH", "XOM", 
                         "JNJ", "JPM", "NVDA", "WMT", "CVX", "PG", "LLY", "MA",
                         "HD", "BAC", "PFE", "KO", "MRK", "PEP", "COST", "TMO", 
                         "AVGO", "ORCL", "TSLA", "DHR", "PSA", "APD", "MSI", "DKNG", "GME")

vector_final <- data.frame(vector_names, normalized_vector)


print(vector_final)

write.csv(vector_final, "C:/Users/rchil/OneDrive/Documents\\finalVector.csv", row.names = FALSE)


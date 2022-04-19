import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';


export default function TitlebarImageList({Data,personagemSorteado,acertos,errados}) {
  function filtro(item){
    let cont = 0 
    const tamanho = (acertos.length)
    if (errados.length !==0){
      if ((errados.includes(item.elemento))){ //elemento : pyro ,  errados [hydro]
       return false
     }
     if((errados.includes(item.estrelas))){
       return false
     }
     if((errados.includes(item.cidade))){
       return false
     }
     if((errados.includes(item.arma))){
       return false
     }
     if((errados.includes(item.cabelo))){ 
       return false
     }

    }   
    if (acertos.includes(item.elemento)){
      cont+=1
      console.log('entrou aqui em elemento acerto')
    }
    if(acertos.includes(item.estrelas)){
      cont+=1
    }
    if(acertos.includes(item.cidade)){
      cont+=1
    }
    if(acertos.includes(item.arma)){
      cont+=1
    }
    if(acertos.includes(item.cabelo)){
      cont+=1
    }
    if (cont === tamanho){
      return true
    }
    
    
    if (acertos.length === 0){
      return true
    }
    else{
      return false
    }
  }

  return (
    <ImageList sx={{ width: "100%", height: 450 }}>
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.sprite}
          style={{
            width: 100, height: 100,margin: '10px',
          }}>
            {filtro(item) &&  <img
            src={`${item.sprite}?w=248&fit=crop&auto=format`}
            srcSet={`${item.sprite}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />}
         
          <ImageListItemBar
            title={item.nome}
            subtitle={item.author}
            position= 'bottom'
            actionIcon={
              <IconButton
                sx={{ }}
                aria-label={`info about ${item.title}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    nome: "albedo",
    elemento: "geo",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_33.png",
    cidade: "mondstadt",
    arma: "espada",
    cabelo: "branco"
  },
  {
    nome: "diluc",
    elemento: "pyro",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_6.png",
    cidade: "mondstadt",
    arma: "espadao",
    cabelo: "vermelho"
  },
  {
    nome: "eula",
    elemento: "cryo",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_63.png",
    cidade: "mondstadt",
    arma: "espadao",
    cabelo: "azul"
  },
  {
    nome: "ganyu",
    elemento: "cryo",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_32.png",
    cidade: "liyue",
    arma: "arco",
    cabelo: "azul"
  },
  {
    nome: "hutao",
    elemento: "pyro",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_36.png",
    cidade: "liyue",
    arma: "lanca",
    cabelo: "marrom"
  },
  {
    nome: "jean",
    elemento: "anemo",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_1.png",
    cidade: "mondstadt",
    arma: "espada",
    cabelo: "branco"
  },
  {
    nome: "kazuha",
    elemento: "anemo",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_49.png",
    cidade: "inazuma",
    arma: "espada",
    cabelo: "branco"
  },
  {
    nome: "ayaka",
    elemento: "cryo",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_25.png",
    cidade: "inazuma",
    arma: "espada",
    cabelo: "azul"
  },
  {
    nome: "keqing",
    elemento: "electro",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_22.png",
    cidade: "liyue",
    arma: "espada",
    cabelo: "roxo"
  },
  {
    nome: "klee",
    elemento: "pyro",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_9.png",
    cidade: "mondstadt",
    arma: "catalisador",
    cabelo: "branco"
  },
  {
    nome: "mona",
    elemento: "hydro",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_14.png",
    cidade: "mondstadt",
    arma: "catalisador",
    cabelo: "preto"
  },
  {
    nome: "qiqi",
    elemento: "cryo",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_21.png",
    cidade: "liyue",
    arma: "espada",
    cabelo: "azul"
  },
  {
    nome: "kokomi",
    elemento: "hydro",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_48.png",
    cidade: "inazuma",
    arma: "catalisador",
    cabelo: "branco"
  },
  {
    nome: "shenhe",
    elemento: "cryo",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_50.png",
    cidade: "liyue",
    arma: "lanca",
    cabelo: "branco"
  },
  {
    nome: "raiden",
    elemento: "electro",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_42.png",
    cidade: "inazuma",
    arma: "lanca",
    cabelo: "roxo"
  },
  {
    nome: "tartaglia",
    elemento: "hydro",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_27.png",
    cidade: "liyue",
    arma: "arco",
    cabelo: "laranja"
  },
  {
    nome: "venti",
    elemento: "anemo",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_8.png",
    cidade: "mondstadt",
    arma: "arco",
    cabelo: "preto"
  },
  {
    nome: "xiao",
    elemento: "anemo",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_15.png",
    cidade: "liyue",
    arma: "lanca",
    cabelo: "verde"
  },
  {
    nome: "zhongli",
    elemento: "geo",
    estrelas: "5",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_26.png",
    cidade: "liyue",
    arma: "lanca",
    cabelo: "preto"
  },
  {
    nome: "amber",
    elemento: "pyro",
    estrelas: "4",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_2.png",
    cidade: "mondstadt",
    arma: "arco",
    cabelo: "preto"
  },
  {
    nome: "barbara",
    elemento: "hydro",
    estrelas: "4",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_5.png",
    cidade: "mondstadt",
    arma: "catalisador",
    cabelo: "branco"
  },
  {
    nome: "beidou",
    elemento: "electro",
    estrelas: "4",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_16.png",
    cidade: "liyue",
    arma: "espadao",
    cabelo: "preto"
  },
  {
    nome: "bennett",
    elemento: "pyro",
    estrelas: "4",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_10.png",
    cidade: "mondstadt",
    arma: "espada",
    cabelo: "branco"
  },
  {
    nome: "diona",
    elemento: "cryo",
    estrelas: "4",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_29.png",
    cidade: "liyue",
    arma: "arco",
    cabelo: "rosa"
  },
  {
    nome: "fischl",
    elemento: "electro",
    estrelas: "4",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_12.png",
    cidade: "mondstadt",
    arma: "arco",
    cabelo: "branco"
  },
  {
    nome: "kaeya",
    elemento: "cryo",
    estrelas: "4",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_4.png",
    cidade: "mondstadt",
    arma: "espada",
    cabelo: "azul"
  },
  {
    nome: "lisa",
    elemento: "electro",
    estrelas: "4",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_3.png",
    cidade: "mondstadt",
    arma: "catalisador",
    cabelo: "marrom"
  },
  {
    nome: "ningguang",
    elemento: "geo",
    estrelas: "4",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_17.png",
    cidade: "liyue",
    arma: "catalisador",
    cabelo: "branco"
  },
  {
    nome: "noelle",
    elemento: "geo",
    estrelas: "4",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_11.png",
    cidade: "mondstadt",
    arma: "espadao",
    cabelo: "branco"
  },
  {
    nome: "razor",
    elemento: "electro",
    estrelas: "4",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_7.png",
    cidade: "mondstadt",
    arma: "espadao",
    cabelo: "branco"
  },
  {
    nome: "rosaria",
    elemento: "cryo",
    estrelas: "4",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_35.png",
    cidade: "mondstadt",
    arma: "lanca",
    cabelo: "vermelho"
  },
  {
    nome: "sucrose",
    elemento: "anemo",
    estrelas: "4",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_13.png",
    cidade: "mondstadt",
    arma: "catalisador",
    cabelo: "verde"
  },
  {
    nome: "xiangling",
    elemento: "pyro",
    estrelas: "4",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_18.png",
    cidade: "liyue",
    arma: "lanca",
    cabelo: "azul"
  },
  {
    nome: "xingqiu",
    elemento: "hydro",
    estrelas: "4",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_19.png",
    cidade: "liyue",
    arma: "espada",
    cabelo: "azul"
  },
  {
    nome: "yanfei",
    elemento: "pyro",
    estrelas: "4",
    sprite: "https://s3.us-east-1.amazonaws.com/gamewith-en/article_tools%2Fgenshin-impact%2Fgacha%2Fchara_64.png",
    cidade: "liyue",
    arma: "catalisador",
    cabelo: "vermelho"
  }
]
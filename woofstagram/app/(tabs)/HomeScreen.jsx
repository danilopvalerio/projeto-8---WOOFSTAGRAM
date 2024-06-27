import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Heading from '../../components/Heading';
import WoofCard from '../../components/WoofCard';
import WoofPost from '../../components/WoofPost';

const data = {
  woofs: [
    { name: "Bobby", avatar: "https://pbs.twimg.com/media/EdAtuqPWAAAAIqa.jpg" },
    { name: "Totó", avatar: "https://i.pinimg.com/236x/bd/79/b8/bd79b8fbc1ec699fdf1f5c07cbc012bd.jpg" },
    { name: "Charllote", avatar: "https://blog-static.petlove.com.br/wp-content/uploads/2022/10/28165802/poddle-branca-com-oculos-rosa-Petlove-2.jpg" },
  ],
  posts: [
    {
      image: "https://www.portofilhote.com.br/wp-content/uploads/2017/12/shutterstock_242328097-1024x683.jpg",
      title: "Dicas para Treinar seu Cão em Casa",
      description: "Aprenda métodos eficazes e simples para ensinar comandos básicos ao seu cão.",
    },
    {
      image: "https://cdn.folhape.com.br/upload/dn_arquivo/2022/04/233826389-230474705621029-4576074846352592246-n.jpg",
      title: "Os Benefícios de Adotar um Cachorro de Abrigo",
      description: "Explore as vantagens emocionais e práticas de adotar um cão resgatado.",
    },
    {
      image: "https://st4.depositphotos.com/10614052/28414/i/450/depositphotos_284140172-stock-photo-cute-dog-with-toothbrush-on.jpg",
      title: "Cuidando da Saúde Dental dos Cães",
      description: "Entenda a importância da higiene bucal para a saúde geral do seu pet.",
    },
    {
      image: "https://petz.com.br/blog/wp-content/uploads/2021/06/como-fazer-o-cachorro-comer-devagar-1.jpg",
      title: "Alimentação Adequada para Cães de Diferentes Idades",
      description: "Aprenda qual a alimentação ideal para o seu pet.",
    },
    {
      image: "https://dogscare.net/wp-content/uploads/2018/09/menina-e-dog-conversando.jpg",
      title: "A Importância da Socialização para Filhotes de Cães",
      description: "Descubra como a socialização precoce pode influenciar o comportamento futuro do seu cão.",
    },
  ],
};

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Heading>WOOFSTAGRAM</Heading>

      <Heading>Pets em alta</Heading>
      <ScrollView horizontal style={styles.horizontalScroll}>
        {data.woofs.map((woof, index) => (
          <WoofCard key={index} name={woof.name} avatar={woof.avatar} />
        ))}
      </ScrollView>
      <Heading>Artigos mais famosos</Heading>
      <View style={styles.postContainer}>
        {data.posts.map((post, index) => (
          <WoofPost
            key={index}
            image={post.image}
            title={post.title}
            description={post.description}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  horizontalScroll: {
    marginBottom: 32,
  },
  postContainer: {
    marginTop: 16,
  },
});

export default HomeScreen;

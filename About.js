import  React  from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import imageA from './assets/a.jpg';
import imageB from './assets/b.jpg';
import imageC from './assets/c.jpg';

const blockA = `Vivamus ultrices condimentum mauris, non malesuada dui aliquet eget. Aliquam eu justo erat. Fusce lacinia sapien a massa gravida, quis iaculis enim convallis. Morbi suscipit magna augue, ut malesuada tellus tristique ac. Praesent vulputate non libero ut tristique. Nulla facilisi. Nulla at justo eget erat luctus dignissim. Suspendisse feugiat convallis felis, nec posuere neque. Quisque blandit velit tincidunt sem vestibulum pharetra id ut tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius feugiat neque sit amet gravida. Ut vitae mi enim. Pellentesque id tempor sem. Aliquam vitae molestie ante.`;

const blockB= `Suspendisse condimentum libero id erat pretium maximus. Sed tincidunt tincidunt mattis. Nunc ullamcorper felis eget mauris varius placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam a metus pretium, vestibulum lectus in, maximus lorem. Nunc at commodo lectus. Phasellus sed laoreet tellus. Mauris consequat risus id lacus lobortis vestibulum. Ut nec mi ac leo cursus aliquet id quis tellus. Vivamus dignissim mauris vel ante vestibulum, et malesuada erat aliquam. Ut ut ex sed nulla ultricies vulputate non in felis. Nunc fermentum, mi vitae facilisis pulvinar, orci eros euismod eros, nec tristique urna tellus in felis. Suspendisse a mauris id ex imperdiet aliquet id eget erat. Ut venenatis nisi sed ornare porttitor. Fusce facilisis urna quis libero feugiat, tempor luctus sem dignissim.`;

export default function AboutThis(){
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image source={imageA} style={{width:'100%', height: 300}}/>
                <Text style={styles.heading}>We are Bananas</Text>
                <Text style={styles.text}>{blockA}</Text>
                <Image source={imageB} style={{width:'100%', height: 300}}/>
                <Text style={styles.heading}>Carpet cleaner is great</Text>
                <Text style={styles.text}>{blockB}</Text>
                <Image source={imageC} style={{width:'100%', height: 300}}/>
                <Text style={styles.heading}>Mmmm doughnuts</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center'
    },
    heading: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        paddingTop: 5
    },
    text:{
        fontFamily: 'OpenSans',
        paddingBottom: 10
    }
});

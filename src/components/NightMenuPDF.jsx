import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { menuData } from '../data/menu.js';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#141414',
        padding: 0,
        width: '100%',
        height: '100%',
    },
    // Common Utils
    centerContainer: { alignItems: 'center', justifyContent: 'center', height: '100%' },
    orangeText: { color: '#FE7102' },
    whiteText: { color: '#ffffff' },

    // Header
    heroTitle: { fontSize: 80, fontFamily: 'Helvetica-Bold', color: '#FE7102', textAlign: 'center', lineHeight: 1 },
    heroSubtitle: { fontSize: 50, fontFamily: 'Helvetica-Bold', color: '#FE7102', textAlign: 'center', lineHeight: 1, marginTop: 10 },
    heroText: { fontSize: 20, fontFamily: 'Helvetica', color: '#FE7102', textAlign: 'center', marginTop: 20, letterSpacing: 2 },

    // Sections
    sectionHeader: {
        fontSize: 40, fontFamily: 'Helvetica-Bold', color: '#FE7102',
        textAlign: 'center', marginTop: 40, marginBottom: 10, textTransform: 'uppercase'
    },
    sectionDivider: { width: 60, height: 4, backgroundColor: '#FDDA04', alignSelf: 'center', marginBottom: 20 },

    // Grid
    gridTwoCol: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 40 },
    gridItem: { width: '45%', marginBottom: 20, alignItems: 'center' },

    // Menu Item
    itemTitle: { fontSize: 24, fontFamily: 'Helvetica-Bold', color: '#ffffff', textAlign: 'center', marginBottom: 5 },
    itemPrice: { fontSize: 20, fontFamily: 'Helvetica-Bold', color: '#FE7102', textAlign: 'center', marginBottom: 5 },
    itemDesc: { fontSize: 12, fontFamily: 'Helvetica', color: 'rgba(255,255,255,0.7)', textAlign: 'center', lineHeight: 1.3 },

    // Images
    foodImage: { width: 150, height: 100, objectFit: 'contain', marginBottom: 10 },

    // Badge
    badge: {
        backgroundColor: '#FDDA04', padding: '5 15', borderRadius: 20, alignSelf: 'center',
        marginBottom: 20, marginTop: -15
    },
    badgeText: { fontSize: 14, fontFamily: 'Helvetica-Bold', color: '#141414' },

    // Footer
    footer: {
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 50, backgroundColor: 'rgba(0,0,0,0.3)', borderTopWidth: 1, borderTopColor: 'rgba(254,113,2,0.3)',
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10
    },
    footerText: { fontSize: 10, fontFamily: 'Helvetica', color: '#FE7102' }
});

const PageFooterPDF = ({ subtitle }) => (
    <View style={styles.footer}>
        <Text style={styles.footerText}>GABIS • {subtitle} • www.gabis.com.mx</Text>
    </View>
);

const MenuItemPDF = ({ title, price, desc, image }) => (
    <View style={styles.gridItem}>
        {image && <Image src={image} style={styles.foodImage} />}
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemPrice}>{price}</Text>
        <Text style={styles.itemDesc}>{desc}</Text>
    </View>
);

const MenuItemRowPDF = ({ name, price, desc }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, paddingHorizontal: 50, width: '100%' }}>
        <View style={{ flex: 1, marginRight: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'baseline', marginBottom: 2 }}>
                <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: 18, color: '#fff' }}>{name}</Text>
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.3)', flex: 1, marginHorizontal: 5 }} />
                <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: 18, color: '#FE7102' }}>{price}</Text>
            </View>
            <Text style={{ fontSize: 11, fontFamily: 'Helvetica', color: 'rgba(255,255,255,0.7)' }}>{desc}</Text>
        </View>
    </View>
);

export const NightMenuPDF = () => (
    <Document title="Menu-Noche-Gabis">
        {/* PAGE 1: PORTADA */}
        <Page size="A4" style={styles.page}>
            <View style={styles.centerContainer}>
                {/* Decorative Images Absolute Positioned? React-PDF absolute is relative to page */}
                {/* Top Left */}
                <Image src="/images/noche/cocaNoF.png" style={{ position: 'absolute', top: -30, left: -30, width: 100, transform: 'rotate(15deg)' }} />
                <Image src="/images/noche/flanNoF.png" style={{ position: 'absolute', top: 40, left: 60, width: 120, transform: 'rotate(-10deg)' }} />

                {/* Center Hero */}
                <Image src="/images/gabisNoF.png" style={{ width: 80, height: 80, marginBottom: 20 }} />

                <Text style={styles.heroTitle}>GABIS</Text>
                <Text style={styles.heroSubtitle}>EL ANTOJO SE{'\n'}VIVE DE NOCHE</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 20, gap: 10 }}>
                    <Text style={{ fontSize: 24, color: '#FE7102', fontFamily: 'Helvetica-Bold' }}>15:00</Text>
                    <View style={{ width: 50, height: 4, backgroundColor: '#FDDA04' }} />
                    <Text style={{ fontSize: 24, color: '#FE7102', fontFamily: 'Helvetica-Bold' }}>23:00</Text>
                </View>

                <Text style={styles.heroText}>Hamburguesas, Alitas, Boneless y Snacks.</Text>

                {/* Bottom Center */}
                <Image src="/images/noche/alitasNoF.png" style={{ position: 'absolute', bottom: -80, left: '25%', width: 300 }} />
            </View>
        </Page>

        {/* PAGE 2: HAMBURGUESAS */}
        <Page size="A4" style={styles.page}>
            <Text style={styles.sectionHeader}>Hamburguesas</Text>
            <View style={styles.sectionDivider} />

            <View style={styles.gridTwoCol}>
                <MenuItemPDF
                    title="Sencilla"
                    price="Sencilla $65 / Doble $85"
                    desc="Carne de res (130g) a la parrilla con doble queso: americano y manchego."
                    image="/images/noche/hamburguesasencilaNoF.png"
                />
                <MenuItemPDF
                    title="Bacon"
                    price="Sencilla $70 / Doble $90"
                    desc="Carne de res (130g) con tocino crujiente, gratinada con queso americano y manchego."
                    image="/images/noche/hamburguesaNoF.png"
                />
                <MenuItemPDF
                    title="Hawaiana"
                    price="Sencilla $70 / Doble $90"
                    desc="Carne de res (130g) con jamón Virginia, piña asada y doble queso."
                    image="/images/noche/hamburguesahawaianaNoF.png"
                />
                <MenuItemPDF
                    title="Especial"
                    price="Sencilla $80 / Doble $100"
                    desc="La reina. Carne (130g) con tocino, jamón, salchicha y doble queso."
                    image="/images/noche/hamburguesaespecialNoF.png"
                />
            </View>

            {/* Sliders Box */}
            <View style={{ marginHorizontal: 40, marginTop: 20, padding: 15, borderWidth: 2, borderColor: '#FE7102', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 22, color: '#FE7102', fontFamily: 'Helvetica-Bold' }}>Sliders (3 pz)</Text>
                    <Text style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', marginTop: 5 }}>Trío de mini hamburguesas con queso y tocino.</Text>
                </View>
                <Text style={{ fontSize: 26, color: '#fff', fontFamily: 'Helvetica-Bold' }}>$120</Text>
            </View>

            <PageFooterPDF subtitle="Hamburguesas al Carbón" />
        </Page>

        {/* PAGE 3: ALITAS Y SNACKS */}
        <Page size="A4" style={styles.page}>
            <Text style={styles.sectionHeader}>Alitas y Snacks</Text>
            <View style={styles.badge}><Text style={styles.badgeText}>¡Todos incluyen papas a la francesa!</Text></View>

            <View style={[styles.gridTwoCol, { justifyContent: 'center', gap: 40 }]}>
                <MenuItemPDF
                    title="Orden de Alitas"
                    price="$80 (6 pzas)"
                    desc="Fritas y crujientes, con papas y tu salsa favorita."
                    image="/images/noche/alitasNoF.png"
                />
                <MenuItemPDF
                    title="Boneless"
                    price="$95 (6 pzas)"
                    desc="Pollo jugoso empanizado, con papas."
                    image="/images/noche/bonelessNoF.png"
                />
            </View>

            {/* Sauces Strip */}
            <View style={{ flexDirection: 'row', width: '100%', height: 40, marginVertical: 30 }}>
                {['BBQ', 'Original', 'Negra', 'Búfalo', 'Spicy', 'Habanero'].map((s, i) => (
                    <View key={i} style={{ flex: 1, backgroundColor: ['#FFB300', '#FB8C00', '#263238', '#F4511E', '#D32F2F', '#EF6C00'][i], alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 10, color: i === 2 ? '#fff' : '#000', fontFamily: 'Helvetica-Bold' }}>{s}</Text>
                    </View>
                ))}
            </View>

            <Text style={[styles.sectionHeader, { fontSize: 30, marginTop: 0 }]}>Papas y Antojos</Text>

            <View style={{ flexDirection: 'row', paddingHorizontal: 40, marginTop: 20 }}>
                <View style={{ width: '40%', alignItems: 'center' }}>
                    <Image src="/images/noche/papasBaconNoF.png" style={{ width: 120, height: 120 }} />
                    <Text style={styles.itemTitle}>Papas Bacon</Text>
                    <Text style={styles.itemPrice}>$55</Text>
                </View>
                <View style={{ width: '60%' }}>
                    <MenuItemRowPDF name="Papas Francesas" price="$45" desc="Clásicas con queso y catsup." />
                    <MenuItemRowPDF name="Papas Locas" price="$50" desc="Salsas negras, limón y chilito." />
                    <MenuItemRowPDF name="Papas Hojuela" price="$45" desc="Estilo chips caseras." />
                </View>
            </View>

            <PageFooterPDF subtitle="Alitas y Snacks" />
        </Page>

        {/* PAGE 4: JOCHOS Y BEBIDAS */}
        <Page size="A4" style={styles.page}>
            <Text style={styles.sectionHeader}>Jochos y Bebidas</Text>
            <View style={styles.sectionDivider} />

            <View style={styles.gridTwoCol}>
                <MenuItemPDF
                    title="Jumbo Clásico"
                    price="$30"
                    desc="Salchicha de pavo jumbo, jitomate, cebolla."
                    image="/images/noche/hotdogsencilloNoF.png"
                />
                <MenuItemPDF
                    title="Jumbo Bacon"
                    price="$35"
                    desc="Envuelto en tocino crujiente."
                    image="/images/noche/hotdogbaconNoF.png"
                />
            </View>

            {/* Salchipulpos Box */}
            <View style={{ marginHorizontal: 40, marginBottom: 30, padding: 10, borderWidth: 2, borderColor: '#FE7102', borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20, color: '#FE7102', fontFamily: 'Helvetica-Bold' }}>Salchipulpos</Text>
                    <Text style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)' }}>Para los peques.</Text>
                </View>
                <Text style={{ fontSize: 24, color: '#fff', fontFamily: 'Helvetica-Bold' }}>$60</Text>
            </View>

            <Text style={[styles.sectionHeader, { fontSize: 30, marginTop: 0 }]}>Bebidas y Postre</Text>

            {/* Flan */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20, backgroundColor: 'rgba(255,255,255,0.05)', marginHorizontal: 60, padding: 10, borderRadius: 10 }}>
                <Image src="/images/noche/flanNoF.png" style={{ width: 60, height: 40, marginRight: 15 }} />
                <View>
                    <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Helvetica-Bold' }}>Flan Napolitano</Text>
                    <Text style={{ color: '#FE7102', fontSize: 18, fontFamily: 'Helvetica-Bold' }}>$40</Text>
                </View>
            </View>

            <MenuItemRowPDF name="Refrescos (355ml)" price="$27" desc="Coca-Cola, Sprite, Sidral, Mundet." />

            {/* Para Llevar Box */}
            <View style={{
                marginTop: 'auto', marginBottom: 60, marginHorizontal: 40, padding: 20,
                backgroundColor: 'rgba(254,113,2,0.1)', borderStyle: 'dashed', borderWidth: 2, borderColor: '#FE7102', borderRadius: 15,
                flexDirection: 'row', alignItems: 'center'
            }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 28, color: '#FE7102', fontFamily: 'Helvetica-Bold' }}>¿PARA LLEVAR?</Text>
                    <Text style={{ fontSize: 12, color: '#fff' }}>Te lo preparamos todo por separado.</Text>
                </View>
                <Image src="/images/whatsappNoF.png" style={{ width: 50, height: 50 }} />
            </View>

            <PageFooterPDF subtitle="Cenas GABIS" />
        </Page>
    </Document>
);

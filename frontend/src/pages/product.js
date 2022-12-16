import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// import Filter from './filter';
import Cards from './cards';
import Navbar from "./navbar";
import './style.css';



const Product = () => {
    const navigate = useNavigate()
    // State untuk mengecek apakah user sudah login atau belum
    const [isLogin, setIsLogin] = React.useState(false)

    // Default user, ganti dengan data user yang didapat dari localstorage
    const [user, setUser] = React.useState({
        id: 1,
        name: 'MHadi',
        email: 'm.hadi@gmail.com'
    })

    // Modifikasi kode di bawah ini untuk mengambil data dari localstorage
    React.useEffect(() => {
        // 1. Ambil data user dari localstorage
        let name  = localStorage.getItem('username')
        let id    = localStorage.getItem('id')
        let email = localStorage.getItem('email')
        let token = localStorage.getItem('token')
        // 2. buat fungsi verifikasi token yang sama seperti di halaman home
        const verifikasi = async()=> {
          try {
            const response = await axios.post('http://localhost:3001/verify', {token : localStorage.getItem('token')})
            console.log(localStorage.getItem('token'))
            if (response.status == 200){
              setIsLogin(true)
            }
            else {
              navigate('/login')
            }
          } catch (error) {
            console.log(error)
          }
        }
        // panggil fungsi verifikasi token di bawah sini
        verifikasi()
        // 3. Lakukan setUser dengan data user yang didapat dari localstorage
        setUser( existingValues => ({
          ...existingValues,
          id: localStorage.getItem('id'),
          name: localStorage.getItem('username'),
          email: localStorage.getItem('email')
        }));
    }, []);

    const handleToHome = () => {
        window.location.href = '/';
    };

    const handleLogout = async () => {
        // 1. Hapus localStorage
        localStorage.removeItem('user');

        // 2. Hit endpoint logout dengan body jwt yang didapat dari localstorage
        //   dan setelah berhasil, beri alert sukses
        await axios.post('https://backendnew-rpb-env.up.railway.app/logout', {
            jwt: localStorage.getItem('token')
        })
        .then((_res) => {
            alert('Logout Success');
        })

        // 3. Redirect ke halaman login, clue : window.location.href = "/"
        window.location.href = '/login';
    }

    if(!isLogin) {
        return (
           
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Loading
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleToHome}
                            >
                                HOME
                            </Button>
                        </Box>
                    </Box>
                </Container>
        );
    }

    return (
        <>
        <div class="product-page">
        <Navbar />
        {/* <Filter /> */}
        <div className="container">
            <div className="row py-5 " >
            </div>
        </div>
        <Cards />
        <div class="bg-product">
        </div>
        </div>
        </>
      
    );
}



export default Product;
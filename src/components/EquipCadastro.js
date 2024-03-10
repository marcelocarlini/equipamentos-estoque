import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField, Box } from '@mui/material'
import axios from 'axios'
import React from 'react'

function EquipCadastro(props) {

    const [modelo, setModelo] = React.useState("")
    const [n_serie, setN_serie] = React.useState("")
    const [patrimonio, setPatrimonio] = React.useState("")
    const [categoria, setCategoria] = React.useState("")
    const [categoriaOptions, setCategoriaOptions] = React.useState([])

    React.useEffect(() => {
        axios.get("https://1ruolljjx9.execute-api.us-east-1.amazonaws.com/listar-categorias").then(
            r => {
                setCategoriaOptions(r.data.response)
            }
        )
    }, [])

    function cadastroProduto() {

        axios.post("https://1ruolljjx9.execute-api.us-east-1.amazonaws.com/cadastro-equipamento", {
            "modelo": modelo,
            "n_serie": n_serie,
            "patrimonio": patrimonio,
            "categoria": categoria
        }).then(r => {
            alert("Produto foi cadastrado")
            setModelo("");
            setN_serie("");
            setPatrimonio("");
            setCategoria("");
        })
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>

            <Card style={{ marginTop: '100px', width: "70%" }}>
                <CardContent>
                    <div style={{ fontSize: "18px", fontWeight: "bold" }}>{props.texto}</div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <TextField value={modelo} onChange={(e) => { setModelo(e.target.value.toUpperCase()) }} style={{ marginTop: "10px" }} id="outlined-basic" label="Modelo" variant="outlined" />
                        <TextField value={n_serie} onChange={(e) => { setN_serie(e.target.value.toUpperCase()) }} style={{ marginTop: "10px" }} id="outlined-basic" label="Numero de Série" variant="outlined" />
                        <TextField value={patrimonio} onChange={(e) => { setPatrimonio(e.target.value.toUpperCase()) }} style={{ marginTop: "10px" }} id="outlined-basic" label="Patrimonio" variant="outlined" />
                        <FormControl style={{ marginTop: "10px" }} fullWidth>
                            <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={categoria}
                                label="Categoria"
                                onChange={(e) => { setCategoria(e.target.value) }}
                            >
                                {
                                    categoriaOptions.map(c => (
                                        <MenuItem value={c.id}>{c.nome}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <Button style={{ marginTop: "10px" }} variant="contained" onClick={() => { cadastroProduto() }}>Salvar</Button>
                    </div>
                </CardContent>
            </Card>
        </Box>

    )
}

export default EquipCadastro
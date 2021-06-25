  
const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        firstname:{
            type: String,
            uppercase: true,
            required: [true, "Ingrese nombre"],
            maxlength: 50,
        },
        lastname:{
            type: String,
            uppercase: true,
            required: [true, "Ingrese Apellido"],
            maxlength: 50
        },
        curp:{
            type: String,
            required: [true, "CURP requerida"],
            uppercase: true,
            validate: {
            validator: function (v) {
            return /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/.test(
                v
                );
              },
              message: (props) => `${props.value} CURP no válida`,
            },
          },
        date:{
            type: Date,
            required: [true, "Ingrese Fecha"],
            default: Date.now,
        },
        controlnumber:{
            type: String,
            required: [true, "El número de control es necesario"],
            unique: true,
        },
        grade:{
            type: Number,
            required: [true, "La calificación es necesaria"],
            min: 0,
            max: 100,
        },
        career:{
            type: String,
            required: [true, "Ingrese una carrera"],
            enum: ["ISC", "IM", "IGE", "IC"],
        }

    }
);

const studentModel = mongoose.model('Student', schema, 'student');

module.exports = studentModel;
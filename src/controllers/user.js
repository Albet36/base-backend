import user from '../models/user.js';
export const listUser = async(req,res) => {
try {
   await user.find({});
    res.status(200).json('success get list');
} catch (error) {
    res.status(500).json('error get list');
}
}
export const getUser = async(req,res) => {
try {

 await user.findById({_id : req.params.id});
    res.status(200).json('get user success');
} catch (error) {
    res.status(500).json('error get user');
}
}
export const addUser = async(req,res) => {
try {
    const users = new user(req.body);
    users.save();
    res.status(200).json('add user success');
} catch (error) {
    res.status(500).json('error add user');
}
}
export const editUser = async(req,res) => {
try {
    console.log(req.body);
    await user.updateOne({_id: req.params.id},req.body);
    res.status(200).json('update success');
} catch (error) {
    res.status(500).json('error edit user');
}
}
export const deleteUser = async(req,res) => {
try {
    await user.remove({_id : req.params.id});
    res.status(200).json('delete success');
} catch (error) {
    res.status(500).json('error delete user');
}
}
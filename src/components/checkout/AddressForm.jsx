import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AddressContext } from '../../context/AddressContext';
import FormInput from '../checkout/FormInput'
import EmptyText from '../common/EmptyText'

const AddressForm = ({
   initialData = {},
   isProfilePage = false, 
   isDisabled = false, 
   onSubmit: externalSubmit, 
   onCancel,
    buttonText = "Save Address"
  }) => {
      console.log(initialData)

  const navigate = useNavigate();
  const { addAddress } = useContext(AddressContext);
  const {
     register,
      handleSubmit,
      reset,
       formState: { errors } 
      } = useForm({
        defaultValues: initialData 
      });


       const onSubmit = (data) => {
    if (isProfilePage && externalSubmit) {
      externalSubmit(data);
    } else if (isProfilePage && !externalSubmit) {
      return;
    } else {
      addAddress(data);
      navigate("/checkout/summaryPage");
    }
  };

  return (
    <div className="max-w-3xl mx-auto ">
      <EmptyText> Delivery Address </EmptyText>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          <FormInput
          name="fullName"
          placeholder="Full Name"
          register={register}
          error={errors.fullName}
          required={!isDisabled}
          disabled={isDisabled}
          validation={{
            minLength: {
              value: 3,
              message: 'Full name must be at least 3 characters'
            },
            maxLength: {
              value: 50,
              message: 'Full name must be less than 50 characters'
            }, 
            pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Only letters are allowed'
              }
          }}
        />

        <FormInput 
          register={register} 
          name="phone" 
          placeholder="Phone Number" 
          error={errors.phone}
          type='tel'
          inputMode="numeric"
          maxLength={10}
          required={!isDisabled}
          disabled={isDisabled}
          validation={{
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Phone number must be 10 digits'
            }
          }}
           onInput={(e) => {
          e.target.value = e.target.value.replace(/\D/g, '').slice(0,10)
          }}
        />

        <FormInput 
          register={register} 
          name="address" 
          placeholder="Address" 
          error={errors.address}
          type="textarea"
          rows={4}
          required={!isDisabled}
          disabled={isDisabled}
         validation={{
            minLength: {
              value: 10,
              message: 'Address must be at least 10 characters'
            },
            maxLength: {
              value: 200,
              message: 'Address must be less than 200 characters'
            }
          }}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormInput 
            register={register} 
            name="city" 
            placeholder="City" 
            error={errors.city} 
            required={!isDisabled}
          disabled={isDisabled}
            validation= {{
              minLength: {
                 value: 2,
                 message : 'City must be at least 2 characters'
            }, 
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: 'Only letters are allowed'
            }
            }}
          />
          <FormInput 
            register={register} 
            name="state" 
            placeholder="State" 
            error={errors.state} 
            required={!isDisabled}
          disabled={isDisabled}
             validation= {{
               minLength: {
                  value: 2,
                  message: 'State must be at least 2 characters'
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                   message: 'Only letters are allowed'
                }
             }
              }
          />
        </div>

        <FormInput 
          register={register} 
          name="pincode" 
          placeholder="Pincode" 
          error={errors.pincode} 
          inputMode="numeric"
          maxLength={6}
       required={!isDisabled}
          disabled={isDisabled}
          validation={{
            pattern: {
              value: /^[0-9]{6}$/,
              message: 'Pincode must be 6 digits'
            }
          }}
          onInput={(e) => {
  e.target.value = e.target.value.replace(/\D/g, '').slice(0, 6)
}}
        />

         {!isDisabled && (
          <div className="flex gap-4 ">
            <button 
              type="submit" 
              className="bg-black cursor-pointer text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black border border-gray-500 font-[600]  transitions-all duration-700 active:scale-90"
            >
              {buttonText}
            </button>
            
            {onCancel && (
              <button 
                type="button"
                onClick={onCancel}
                className="bg-gray-500 cursor-pointer text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors active:scale-90"
              >
                Cancel
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default AddressForm;
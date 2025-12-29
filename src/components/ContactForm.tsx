import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSet,
} from "@/components/ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function ContactForm() {
	return (
		<div className='flex justify-center px-5 py-5'>
			<form className='w-full max-w-xl min-w-xs'>
				<FieldSet>
					<FieldLegend className='text-xl uppercase'>
						Formulaire de contact
					</FieldLegend>
					<FieldDescription>
						Envie de travailler ensemble ? Besoin d'un devis ou
						d'informations complémentaires ? Complétez ce formulaire
						et vous recevrez une réponse sous 48h.
					</FieldDescription>
					<FieldGroup>
						<div className='gap-5 sm:flex justify-center'>
							<Field>
								<FieldLabel htmlFor='name'>Nom *</FieldLabel>
								<Input
									id='name'
									placeholder='Deschamps'
									required
								/>
							</Field>
							<Field>
								<FieldLabel htmlFor='username'>
									Prénom *
								</FieldLabel>
								<Input
									id='username'
									placeholder='Felix'
									required
								/>
							</Field>
						</div>

						<Field>
							<FieldLabel htmlFor='email'>
								Adresse email *
							</FieldLabel>
							<Input
								id='email'
								placeholder='felix.deschamps@email.com'
								required
							/>
						</Field>
						<Field>
							<FieldLabel htmlFor='number'>
								Numéro de téléphone{" "}
							</FieldLabel>
							<Input
								id='phone'
								autoComplete='off'
								placeholder='0612345678'
							/>
						</Field>
						<Field>
							<FieldLabel htmlFor='subject'>Sujet *</FieldLabel>
							<Input
								id='subject'
								autoComplete='off'
								placeholder='Demande de devis'
								required
							/>
						</Field>
						<Field>
							<FieldLabel htmlFor='message'>
								Votre message *
							</FieldLabel>
							<Textarea
								className='h-50'
								id='message'
								autoComplete='off'
								placeholder='Bonjour, je suis artisan dans le secteur de X et souhaiterais avoir un devis pour ...'
								required
							/>
						</Field>
						<Button
							className='w-50'
							type='submit'>
							Envoyer
						</Button>
					</FieldGroup>
				</FieldSet>
			</form>
		</div>
	);
}

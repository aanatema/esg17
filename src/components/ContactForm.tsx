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
		<div className='w-full max-w-md'>
			<form>
				<FieldSet>
					<FieldLegend>Formulaire de contact</FieldLegend>
					<FieldDescription>
						Remplissez les champs du formulaire avec soin
					</FieldDescription>
					<FieldGroup>
						<div className='gap-5 flex justify-center'>
							<Field>
								<FieldLabel htmlFor='name'>Nom</FieldLabel>
								<Input
									id='name'
									autoComplete='off'
									placeholder='Deschamps'
									required
								/>
							</Field>
							<Field>
								<FieldLabel htmlFor='username'>
									Prénom
								</FieldLabel>
								<Input
									id='username'
									autoComplete='off'
									placeholder='Felix'
									required
								/>
							</Field>
						</div>

						<Field>
							<FieldLabel htmlFor='email'>
								Adresse email
							</FieldLabel>
							<Input
								id='email'
								autoComplete='off'
								placeholder='felix.deschamps@email.com'
								required
							/>
						</Field>
						<Field>
							<FieldLabel htmlFor='subject'>Sujet</FieldLabel>
							<Input
								id='subject'
								autoComplete='off'
								placeholder='Demande de devis'
								required
							/>
						</Field>
						<Field>
							<FieldLabel htmlFor='message'>
								Votre message
							</FieldLabel>
							<Textarea
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
